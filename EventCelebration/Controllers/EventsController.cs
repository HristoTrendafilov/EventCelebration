namespace EventCelebration.Controllers
{
    using System.Collections.Generic;
    using System.Linq;

    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;

    using Models;

    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private string eventsJSONPath = @"..\EventCelebration\Data\Events.json";


        [HttpGet]
        public ActionResult<List<Event>> GetEvents()
        {
            var events = JsonConvert.DeserializeObject<List<Event>>(System.IO.File.ReadAllText(eventsJSONPath));
            return events;
        }

        [HttpPost]
        public ActionResult CreateEvent(Event @event)
        {
            var list = JsonConvert.DeserializeObject<List<Event>>(System.IO.File.ReadAllText(eventsJSONPath));
            list.Add(@event);

            var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            System.IO.File.WriteAllText(eventsJSONPath, convertedJson);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEvent(string id)
        {
            var list = JsonConvert.DeserializeObject<List<Event>>(System.IO.File.ReadAllText(eventsJSONPath));
            
            var itemToRemove = list.Single(x => x.Id == id);
            list.Remove(itemToRemove);
            
            var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            System.IO.File.WriteAllText(eventsJSONPath, convertedJson);

            return NoContent();
        }
    }
}