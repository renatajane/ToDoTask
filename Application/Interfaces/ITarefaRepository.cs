using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ITarefaRepository
    {
        Task<IEnumerable<Domain.TarefaDomain>> GetAll();

        Task<Domain.TarefaDomain?>GetById(int id);

        Task Create(Domain.TarefaDomain task);

        Task Update(Domain.TarefaDomain task);

        Task DeleteById(int id);

    }
}
