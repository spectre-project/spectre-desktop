# Spectre Desktop Applets

Spectre Desktop provides a miniature framework that enables you to
easily create an NWJS window within Spectre Desktop that has access
to the configuration.

This is an equivalent to a NodeJs application with a web interface
that receives Spectre Desktop + Spectre Application Stack
configuration on startup.

Applets can be located within the Spectre Desktop application folder
inside `apps` subfolder or symlinked to this location. Alternatively
applets can be configured to run from a custom location via
configuration settings.

## Configuration Settings

The following applet configuration settings can should be created
inside of Spectre Desktop module configuration settings (located in
the *Settings tab*) or can be placed inside the `"spectre-desktop"`
property of `packaje.json` manifest file if located within the apps
folder:

```json
{
    "name": "DAGViz",
    "location": "http://localhost:8689",
    "stop": "http://localhost:8689/stop",
    "width": 1600,
    "height": 680,
    "args": [
      "node",
      "dagviz",
      "--spectre-desktop",
      "--no-auth",
      "--port=8689",
      "--mqtt-address=mqtt://localhost:$MQTT-PORT"
    ]
}
```

The following is a `package.json` sample file:

```json
{
    "name": "my-app",
    "version": "1.2.3",
    "spectre-desktop": { 
        "name": "My App",
        "location": "https://spectre-network.org"
    }
}
```

## Supported properties

* `name` - name of the application
* `location` - URL Spectre Desktop should open
* `stop` *optional* - URL to signal Spectre Desktop shutdown
* `width` *optional* - Applet window width
* `height` *optional* - Applet window height
* `args` *optional* - array of command line arguments to spawn at
  Spectre Desktop startup
* `advanced` *optional* - this option will cause applet to show up
  only if *Advanced Settings* option is enabled.
