using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Domain
{
    public abstract class Computer
    {
        public Guid Id { get; set; }
        public string Model { get; set; }
        public string Type { get; set; }
        public string Processor { get; set; }
        public string Brand { get; set; }
        public int UsbPorts { get; set; }
        public int RamSlots { get; set; }
    }

    [Table("Desktops")]
    public class Desktop : Computer
    {
        public string FormFactor { get; set; }
    }

    [Table("Laptops")]
    public class Laptop : Computer
    {
        public int ScreenSize { get; set; }
    }

}