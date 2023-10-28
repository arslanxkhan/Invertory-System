namespace Models.Dto
{
    public class SalesDto : BaseModel<long>
    {
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }

        public long ProductId { get; set; }

        public ProductDto Products { get; set; }

        public int Quantity { get; set; }

        public double TotalPrice { get; set; }
    }
}
