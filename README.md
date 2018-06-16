# ngx-charts inside of a Bootstrap grid

This is a sample application to investigate an issue with non-responsive ngx-charts within a grid. When using a wrapping _div_ around the ngx-charts element, the chart will have a fixed width of 600x400 with no resizing. Setting a fixed width on the wrapping div solves the issue. 

More advanced solutions could include a resize listener which maintains a set aspect ratio.

## Running the app

To run the app, install the packages (_npm install_) and start a development server (_ng serve_).