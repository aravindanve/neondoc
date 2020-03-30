export const sampleMarkdown = `
## Subtitle

Also Markdown _formatted_. This also includes **bold** formatting – hooray!

> “A quote from another time and place”

Another paragraph. Code sample:

\`\`\`http
Authorization: bearer 5262d64b892e8d4341000001
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3


And some more code. This is from \`openapi-document.helper.ts\`:

\`\`\`ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule } from './libraries/redoc-module';
import { HttpServerConfig } from '@projects/api-common/configs';
import { join } from 'path';
import { AppModule } from './app.module';
import { AppModule as AssetsAppModule } from '@projects/api-assets/app.module';
import { createDocument } from './helpers/openapi-document.helper';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');

// handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // configure paths and engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // build docs
  const options = new DocumentBuilder().setTitle('StreamKast API Reference').setVersion(version).build();
  const document = await createDocument(SwaggerModule, options, [AssetsAppModule]);

  // setup docs
  SwaggerModule.setup('/api-reference-swagger-ui', app, document);
  RedocModule.setup('/api-reference-redoc', app, document);

  // setup app
  const config = app.get(HttpServerConfig);
  await app.listen(config.port, config.host);
}

bootstrap();
\`\`\`


\`\`\`json
{
  "type": "event",
  "id": "1771d834-0b87-4c9c-9c05-c939545d7028",
  "eventType": "standard",
  "displayName": "Test Event",
  "description": "",
  "tags": "test, docs",
  "isPublished": false,
  "previewImageSmallUrl": null,
  "previewImageLargeUrl": null,
  "previews": [],
  "state": "new",
  "activeConferenceState": "started",
  "activeBroadcastState": "new",
  "joinModes": [
    "conference",
    "broadcast"
  ],
  "startsAt": "2020-03-28T20:41:04.538Z",
  "endsAt": "2020-03-28T20:41:04.538Z",
  "isPurchased": true,
  "createdAt": "2020-03-28T20:41:04.538Z",
  "updatedAt": "2020-03-28T20:41:04.538Z",
  "rank": 0,
}
\`\`\`


An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~

### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

| Name | Size | Material | Color |
| - |
| All Business | 9 | leather | brown |
| Roundabout | 10 | hemp canvas | natural |
| Cinderella | 11 | glass | transparent |

A horizontal rule follows.

***

and images can be specified like so:

![example image](http://www.unexpected-vortices.com/sw/rippledoc/example-image.jpg "An exemplary image")

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \\\`foo\\\`, \\*bar\\*, etc.
`;
