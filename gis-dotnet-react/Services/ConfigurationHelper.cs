namespace gis_dotnet_react.Helpers;

public static class ConfigurationHelper
{
    public static IConfiguration config;
    public static void Initialize(IConfiguration Configuration)
    {
        config = Configuration;
    }
}
