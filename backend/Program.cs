using LibraryApi.Repositories;
var builder=WebApplication.CreateBuilder(args);builder.Services.AddControllers();builder.Services.AddSingleton<JsonBookRepository>();builder.Services.AddCors(o=>o.AddDefaultPolicy(p=>p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));var app=builder.Build();app.UseCors();app.MapControllers();app.Run("http://0.0.0.0:5000");
