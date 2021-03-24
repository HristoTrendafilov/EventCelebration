using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventCelebration.Models
{
    public class User
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}
