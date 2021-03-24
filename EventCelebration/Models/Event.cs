using System;

namespace EventCelebration.Models
{
    public class Event
    {
        public Event()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public string PersonName { get; set; }

        public DateTime Date { get; set; }

        public string EventName { get; set; }

        public string Message { get; set; }
    }
}
