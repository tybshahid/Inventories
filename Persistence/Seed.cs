using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Computers.Any()) return;

            var desktops = new List<Desktop>
            {
                new Desktop
                {
                  Type = "Desktop",
                  Model = "ThinkCentre M920",
                  Processor = "i3",
                  Brand = "Lenovo",
                  UsbPorts = 5,
                  RamSlots = 5,
                  FormFactor = "Tower"
                },
                new Desktop
                {
                  Type = "Desktop",
                  Model = "ThinkCentre M80s",
                  Processor = "i5",
                  Brand = "Lenovo",
                  UsbPorts = 6,
                  RamSlots = 6,
                  FormFactor = "SFF"
                },
                new Desktop
                {
                  Type = "Desktop",
                  Model = "ThinkCentre M80q Tiny",
                  Processor = "i7",
                  Brand = "Lenovo",
                  UsbPorts = 7,
                  RamSlots = 7,
                  FormFactor = "Tiny"
                },
            };

            var laptops = new List<Laptop>
            {
                new Laptop
                {
                  Type = "Laptop",
                  Model = "ThinkPad T14",
                  Processor = "i3",
                  Brand = "Lenovo",
                  UsbPorts = 5,
                  RamSlots = 5,
                  ScreenSize = 14
                },
                new Laptop
                {
                  Type = "Laptop",
                  Model = "ThinkPad T15",
                  Processor = "i5",
                  Brand = "Lenovo",
                  UsbPorts = 6,
                  RamSlots = 6,
                  ScreenSize = 15
                },
                new Laptop
                {
                  Type = "Laptop",
                  Model = "ThinkPad T14 (AMD)",
                  Processor = "i7",
                  Brand = "Lenovo",
                  UsbPorts = 7,
                  RamSlots = 7,
                  ScreenSize = 16
                },
            };

            await context.Computers.AddRangeAsync(desktops);
            await context.Computers.AddRangeAsync(laptops);
            await context.SaveChangesAsync();
        }
    }
}