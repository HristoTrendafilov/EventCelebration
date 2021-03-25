namespace EventCelebration.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    
    using Models;
    
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private string usersJSONPath = @"..\EventCelebration\Data\Users.json";
        public ActionResult Register(User user)
        {


            return null;
        }
        public ActionResult Login()
        {
            return null;
        }
    }
}
