namespace EventCelebration.Controllers
{
    using System.Collections.Generic;

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
            events = JsonConvert.DeserializeObject<List<Event>>(System.IO.File.ReadAllText(eventsJSONPath));

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

            System.IO.File.WriteAllText(eventsJSONPath, JsonConvert.SerializeObject(events));

            return this.RedirectToAction("GetEvents");
        }
    }
}