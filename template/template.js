function sampleTemplate(name, place) {
  let template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin-top: 20%">
    <h1 style="color: blue; text-align: center">
      My name is ${name}<br />
      I am from ${place}
    </h1>
  </body>
</html>
`;
  return template;
}

module.exports = {
  sampleTemplate,
};
