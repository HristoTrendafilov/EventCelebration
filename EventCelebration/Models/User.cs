namespace EventCelebration.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;


    public class User
    {

        public string Id { get; set; }

        [Required]
        public string Username { get; set; }
        
        [Required]
        public string Password { get; set; }

        public string Token {get; set; }

        //public string JWTBearer { get; set; }
    }
}
