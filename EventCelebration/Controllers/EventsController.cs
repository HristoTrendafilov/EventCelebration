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

        private List<Event> events;

        public EventsController()
        {
            DeserializeJsonToEvents(eventsJSONPath);
        }


        [HttpGet]
        public ActionResult<List<Event>> GetEvents()
        {
            return events;
        }

        [HttpPost]
        public ActionResult CreateEvent(Event @event)
        {
            events.Add(@event);

            SerializeEventsToJSON(events);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEvent(string id)
        {
            
            var itemToRemove = events.Single(x => x.Id == id);
            events.Remove(itemToRemove);

            SerializeEventsToJSON(events);

            return NoContent();
        }

        private void SerializeEventsToJSON(List<Event> events)
        {
            var convertedJson = JsonConvert.SerializeObject(events, Formatting.Indented);
            System.IO.File.WriteAllText(eventsJSONPath, convertedJson);
        }
        private void DeserializeJsonToEvents(string eventsJSONPath)
        {
            events = JsonConvert.DeserializeObject<List<Event>>(System.IO.File.ReadAllText(eventsJSONPath));
            if (events == null)
            {
                events = new List<Event>();
            }
        }
    }
}