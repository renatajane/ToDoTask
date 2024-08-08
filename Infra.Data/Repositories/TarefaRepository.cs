using Application.Interfaces;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infra.Data.Repositories
{
    public class TarefaRepository : ITarefaRepository
    {
        private readonly ApplicationDbContext applicationDbContext;

        public TarefaRepository(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task Create(TarefaDomain task)
        {
            applicationDbContext.Add(task);
            await applicationDbContext.SaveChangesAsync();
        }

        public async Task  DeleteById(int id)
        {
            var entity = await applicationDbContext.Tarefa.FindAsync(id);
            if (entity != null)
            {
                applicationDbContext.Remove(entity);
                await applicationDbContext.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Entity not found.");
            }
        }

        public async Task<IEnumerable<TarefaDomain>> GetAll()
        {
            var entities = await applicationDbContext.Tarefa.ToListAsync();
            return entities;
        }

        public async Task<TarefaDomain?> GetById(int id)
        {
           var entity = await applicationDbContext.Tarefa.FindAsync(id);
           return entity;
        }

        public async Task Update(TarefaDomain task)
        {
           applicationDbContext.Update(task);
           await applicationDbContext.SaveChangesAsync();
        }
    }
}
