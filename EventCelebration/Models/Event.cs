namespace EventCelebration.Models
{
    using System;
    
    public class Event
    {
        public Event()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CreatedOn = DateTime.Now;
        }

        public string Id { get; set; }

        public string PersonName { get; set; }

        public DateTime Date { get; set; }

        public string EventName { get; set; }

        public string Message { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}
