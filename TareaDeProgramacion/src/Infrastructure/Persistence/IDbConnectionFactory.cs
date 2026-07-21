using System.Data;

namespace TareaDeProgramacion.Infrastructure.Persistence;

public interface IDbConnectionFactory
{
    IDbConnection CreateConnection();
}
