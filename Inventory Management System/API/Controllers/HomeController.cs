using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]

    public class HomeController : BaseController
    {

        public HomeController()
        {

        }


        [HttpGet]
        [Route("")]
        public string GetString()
        {
            return "Hello";
        }

    }
}
