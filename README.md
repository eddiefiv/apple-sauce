
# Apple Sauce

App that acts as a music player using MusicKitJS and electron to display the gui using HTML, CSS and JS
## Installation

Apple Sauce can be installed either through the releases panel, or through a manual compile using electron-packager

### Manual Installation

Clone Repository

```bash
  git clone https://github.com/eddiefiv/apple-sauce
```

Use electron-packager to package project

```bash
  electron-packager . sauce --overwrite --asar=true --platform=win32 --arch=ia32 --icon=icons/icons8_Apple_Jam_48px.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Apple Sauce"
```


## Contributing

To contribute ideas or change requests, use issues to provide feedback or ideas

Be sure to use the correct `tags` to provide more accurate issues

