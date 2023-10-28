using Data.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class PurchaseController : BaseController
    {
        private readonly IPurchaseService purchaseService;

        public PurchaseController(IPurchaseService purchaseService)
        {
            this.purchaseService = purchaseService;
        }



        [HttpGet]
        [Route("all")]
        public ActionResult<List<PurchasesDto>> GetAll()
        {
            return purchaseService.GetAll();
        }



        // when new purchases add , then quantity will automaticlly added to the product
        // you can check in ADD method below
        [HttpPost]
        [Route("new")]
        public async Task<ActionResult> NewPurchase(PurchasesDto dto)
        {
            try
            {
                if (dto is null) BadRequest("Data cannot be empty");

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var res = await purchaseService.Add(dto);
                return res ? Ok() : BadRequest("Something has gone wrong");
            }
            catch (Exception x)
            {
                return BadRequest(x.Message);
            }
        }
    }
}
