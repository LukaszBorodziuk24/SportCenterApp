namespace SportCenterApi.Middleware
{
    public class BlockEndpointMiddleware
    {
        private readonly RequestDelegate _next;

        public BlockEndpointMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            if (context.Request.Path.StartsWithSegments("/register"))
            {
                context.Response.StatusCode = StatusCodes.Status404NotFound;
                return;
            }

            await _next(context);
        }
    }
}
