import os, functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = "/Users/priti-save/Documents/Personal/New"
os.chdir(ROOT)
Handler = functools.partial(SimpleHTTPRequestHandler, directory=ROOT)
httpd = ThreadingHTTPServer(("127.0.0.1", 4599), Handler)
print("serving on 4599")
httpd.serve_forever()
