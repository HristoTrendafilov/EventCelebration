using EventCelebration.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace EventCelebration.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        [HttpGet]
        public ActionResult<List<Event>> GetEvents()
        {
            var events = new List<Event>()
            {
                new Event(){Date = new DateTime(1994,05,02), EventName = "Something", Message = "Something", PersonName = "Hasan"},
                new Event(){Date = new DateTime(1995,05,02), EventName = "Something", Message = "Something", PersonName = "Ivan"},
                new Event(){Date = new DateTime(1996,05,02), EventName = "Something", Message = "Something", PersonName = "Mariq"},
            };

            return events;
        }
    }
}
