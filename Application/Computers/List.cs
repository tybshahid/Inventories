using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Computers
{
    public class List
    {
        public class Query : IRequest<List<Computer>> { }

        public class Handler : IRequestHandler<Query, List<Computer>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Computer>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Computers.ToListAsync(cancellationToken);
            }
        }
    }
}