using Models.DB;

namespace Models.Dto
{
    public class PurchasesDto : BaseModel<long>
    {
        public string SupplierName { get; set; }
        public string SupplierNumber { get; set; }
        public int Quantity { get; set; }
        public DateTime DeliveryDate { get; set; }

        public long ProductId { get; set; }
        public ProductDto? Products { get; set; }
    }
}
