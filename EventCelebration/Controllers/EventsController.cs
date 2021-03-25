namespace EventCelebration.Controllers
{
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;

    using Models;
    using System;

    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : Controller
    {

        [HttpGet]
        public ActionResult<List<Event>> GetEvents()
        {
            return new List<Event>()
            {
                new Event(){Date =  new DateTime(1993,05,02), EventName = "Birthdate", Message = "some message some message some message some message some message some message some message some message some messagesome messagesome message", PersonName = "Hristo", },
                new Event(){Date =  new DateTime(1994,05,02), EventName = "Birthdate", Message = "some message", PersonName = "Ivan", },
                new Event(){Date =  new DateTime(1995,05,02), EventName = "Birthdate", Message = "some message", PersonName = "Mariq", },
                new Event(){Date =  new DateTime(1996,05,02), EventName = "Birthdate", Message = "some message", PersonName = "Hristo1", },
            };
        }

        [HttpPost]
        public IActionResult CreateEvent()
        {


            return this.RedirectToAction("GetEvents");
        }
    }
}