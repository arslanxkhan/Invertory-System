using Data.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using Models.Dto;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class SalesController : BaseController
    {
        private readonly ISalesService salesService;

        public SalesController(ISalesService salesService)
        {
            this.salesService = salesService;
        }


        [HttpGet]
        [Route("all")]

        public ActionResult<List<SalesDto>> All()
        {
            var list = salesService.GetSales();
            return Ok(list);
        }



        // this end point calls when user buy products
        [HttpPost]
        [Route("{productId:int}")]
        public async Task<ActionResult> Sale(SalesDto dto)
        {
            if (dto is null) return BadRequest("Product not found");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var res = await salesService.Sale(dto);

            return res ? Ok() : BadRequest("Something has gone wrong");
        }
    }
}
