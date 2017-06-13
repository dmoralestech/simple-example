'use strict';

const errorOverlayMiddleware = require('react-error-overlay/middleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const config = require('./webpack.config.dev');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    // WebpackDevServer 2.4.3 introduced a security fix that prevents remote
    // websites from potentially accessing local content through DNS rebinding:
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    // However, it made several existing use cases such as development in cloud
    // environment or subdomains in development significantly more complicated:
    // https://github.com/facebookincubator/create-react-app/issues/2271
    // https://github.com/facebookincubator/create-react-app/issues/2233
    // While we're investigating better solutions, for now we will take a
    // compromise. Since our WDS configuration only serves files in the `public`
    // folder we won't consider accessing them a vulnerability. However, if you
    // use the `proxy` feature, it gets more dangerous because it can expose
    // remote code execution vulnerabilities in backends like Django and Rails.
    // So we will disable the host check normally, but enable it if you have
    // specified the `proxy` setting. Finally, we let you override it if you
    // really know what you're doing with a special environment variable.
    disableHostCheck: !proxy ||
      process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // Enable gzip compression of generated files.
    compress: true,
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    // This is confusing because those files won’t automatically be available in
    // production build folder unless we copy them. However, copying the whole
    // project directory is dangerous because we may expose sensitive files.
    // Instead, we establish a convention that only files in `public` directory
    // get served. Our build script will copy `public` into the `build` folder.
    // In `index.html`, you can get URL of `public` folder with %PUBLIC_URL%:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
    // Note that we only recommend to use `public` folder as an escape hatch
    // for files like `favicon.ico`, `manifest.json`, and libraries that are
    // for some reason broken when imported through Webpack. If you just want to
    // use an image, put it in `src` and `import` it from JavaScript instead.
    contentBase: paths.appPublic,
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: config.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/,
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    setup(app) {
      const models = [
        {
          "id": 100,
          "makeId": 10,
          "name": "911 Carrera 4s",
          "price": 297130,
          "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"
        },
        {
          "id": 110,
          "makeId": 10,
          "name": "Cayenne GTS",
          "price": 171605,
          "imageUrl": "http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"
        },
        {
          "id": 120,
          "makeId": 10,
          "name": "Panamera 4S",
          "price": 328160,
          "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/970-g2-4s-modelimage-sideshot/model/a23b6da0-33b9-11e6-9225-0019999cd470;s25/porsche-model.png"
        },
        {
          "id": 210,
          "makeId": 20,
          "name": "Leaf",
          "price": 50000,
          "imageUrl": "http://o.aolcdn.com/commerce/autodata/images/USC10NIC161B021001.jpg"
        },
        {
          "id": 220,
          "makeId": 20,
          "name": "GT-R",
          "price": 180000,
          "imageUrl": "http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/1280x720+0+104/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/55737528ce8b83620a84bfa35c05e152/201537017/2009-nissan-gtr.jpg"
        },
        {
          "id": 300,
          "makeId": 30,
          "name": "1",
          "price": 83000,
          "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/1-series/5-door/2015/at-a-glance/design-fw-exterieur-01.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447923462248.jpg"
        },
        {
          "id": 310,
          "makeId": 30,
          "name": "2",
          "price": 125000,
          "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/2-series/coupe/2013/at-a-glance/Exterieur-design-03.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1470324214485.jpg"
        },
        {
          "id": 320,
          "makeId": 30,
          "name": "3",
          "price": 150000,
          "imageUrl": "http://www.bmw.com.au/content/dam/bmw/common/all-models/3-series/sedan/2015/at-a-glance/3-series-sedan-design.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447942773188.jpg"
        },
        {
          "id": 400,
          "makeId": 40,
          "name": "S5",
          "price": 165000,
          "imageUrl": "http://media.caranddriver.com/images/media/267365/2008-audi-s5-photo-105022-s-450x274.jpg"
        },
        {
          "id": 510,
          "makeId": 50,
          "name": "TT",
          "price": 40000,
          "imageUrl": "http://media.caranddriver.com/images/media/3124/2007-nissan-350z-photo-3786-s-429x262.jpg"
        },
        {
          "id": 520,
          "makeId": 50,
          "name": "MX-5",
          "price": 90000,
          "imageUrl": "http://www.mazda.com.au/assets/cars/allnewmx5/overview/standard-feature-panel/overview-roadster-gt.jpg"
        }
      ];
      const makes = [
        {
          "id": 10,
          "name": "Porsche"
        },
        {
          "id": 20,
          "name": "Nissan"
        },
        {
          "id": 30,
          "name": "BMW"
        },
        {
          "id": 40,
          "name": "Audi"
        },
        {
          "id": 50,
          "name": "Mazda"
        }
      ];
      const cotw = {
        "modelId": 520,
        "review": "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."
      };
      app.get('/api/v1.0/makes/:id', function (req, res) {
        let strId = req.params.id;
        if (strId === '' || strId === '*') { // makeId is blank, meaning all
          res.writeHead(200, {"Content-Type": "application/json"});
          res.end(JSON.stringify(makes));
          return;
        }
        let id = Number(strId); // no need to worry about NaN here, because the filter does a ===
        if (isNaN(id)) {
          res.writeHead(500, {"Content-Type": "application/json"});
          return;
        }
        let filteredMakes = makes.filter(make => make.id === id);
        if (filteredMakes.length === 0) {
          res.writeHead(404, {"Content-Type": "application/json"});
        } else {
          res.writeHead(200, {"Content-Type": "application/json"});
        }
        res.end(JSON.stringify(filteredMakes));
      });
      app.get('/api/v1.0/makes/:id/models', function (req, res) {
        let strId = req.params.id;
        if (strId === '*') { // id is blank, meaning all
          res.writeHead(200, {"Content-Type": "application/json"});
          res.end(JSON.stringify(models));
          return;
        }
        let id = Number(strId); // no need to worry about NaN here, because the filter does a ===
        if (isNaN(id)) {
          res.writeHead(500, {"Content-Type": "application/json"});
          return;
        }
        let filteredModels = models.filter(model => model.makeId === id);
        if (filteredModels.length === 0) {
          res.writeHead(404, {"Content-Type": "application/json"});
        } else {
          res.writeHead(200, {"Content-Type": "application/json"});
        }
        res.end(JSON.stringify(filteredModels));
      });
      app.get('/api/v1.0/models/:id', function (req, res) {
        let strId = req.params.id;
        if (strId === '' || strId === '*') { // makeId is blank, meaning all
          res.writeHead(200, {"Content-Type": "application/json"});
          res.end(JSON.stringify(models));
          return;
        }
        let id = Number(strId); // no need to worry about NaN here, because the filter does a ===
        if (isNaN(id)) {
          res.writeHead(500, {"Content-Type": "application/json"});
          return;
        }
        let filteredModels = models.filter(model => model.id === id);
        if (filteredModels.length === 0) {
          res.writeHead(404, {"Content-Type": "application/json"});
        } else {
          res.writeHead(200, {"Content-Type": "application/json"});
        }
        res.end(JSON.stringify(filteredModels));
      });
      app.get('/api/v1.0/caroftheweek/', function (req, res) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(cotw));
      });

      // This lets us open files from the runtime error overlay.
      app.use(errorOverlayMiddleware());
      // This service worker file is effectively a 'no-op' that will reset any
      // previous service worker registered for the same host:port combination.
      // We do this in development to avoid hitting the production cache if
      // it used the same host and port.
      // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
