PDF_CMD=$1
HTML_CMD=$2
if [ -z "$PDF_CMD" ]; then
  PDF_CMD="docker run --rm -it -v $PWD:/documents/ asciidoctor/docker-asciidoctor:1.76 asciidoctor-pdf"
fi

if [ -z "$HTML_CMD" ]; then
  HTML_CMD="docker run --rm -it -v $PWD:/documents/ asciidoctor/docker-asciidoctor:1.76 asciidoctor"
fi

function copy() {
  mkdir -p "$2"/"$1"

  # Dateien kopieren, falls vorhanden (jpg)
  find ./"$1" -maxdepth 1 -type f -name '*.jpg' -exec cp {} "$2"/"$1"/ \;

  # Dateien kopieren, falls vorhanden (png)
  find ./"$1" -maxdepth 1 -type f -name '*.png' -exec cp {} "$2"/"$1"/ \;
}

# HTML
OUT_DIR="out/01c_html-dom"
OUT_DIR_HTML="$OUT_DIR/html"
OUT_DIR_PDF="$OUT_DIR/pdf"
rm -rf $OUT_DIR
mkdir -p $OUT_DIR_HTML
mkdir -p $OUT_DIR_PDF

$HTML_CMD -D "$OUT_DIR_HTML" 01c_html-dom.adoc
$PDF_CMD -a pdf-theme=theme.yml -D "$OUT_DIR_PDF" 01c_html-dom.adoc
copy 00-intro/wireframes $OUT_DIR_HTML

# CSS
OUT_DIR="out/01d_css"
OUT_DIR_HTML="$OUT_DIR/html"
OUT_DIR_PDF="$OUT_DIR/pdf"
rm -rf $OUT_DIR
mkdir -p $OUT_DIR_HTML
mkdir -p $OUT_DIR_PDF

$HTML_CMD -D "$OUT_DIR_HTML" 01d_css.adoc
$PDF_CMD -a pdf-theme=theme.yml -D "$OUT_DIR_PDF" 01d_css.adoc
copy 00-intro/wireframes $OUT_DIR_HTML
copy 01d_css/app/wireframes $OUT_DIR_HTML

# Javascript
OUT_DIR="out/01e_javascript"
OUT_DIR_HTML="$OUT_DIR/html"
OUT_DIR_PDF="$OUT_DIR/pdf"
rm -rf $OUT_DIR
mkdir -p $OUT_DIR_HTML
mkdir -p $OUT_DIR_PDF

$HTML_CMD -D "$OUT_DIR_HTML" 01e_javascript.adoc
$PDF_CMD -a pdf-theme=theme.yml -D "$OUT_DIR_PDF" 01e_javascript.adoc
copy 00-intro/wireframes $OUT_DIR_HTML

# Testing
OUT_DIR="out/02a_testing"
OUT_DIR_HTML="$OUT_DIR/html"
OUT_DIR_PDF="$OUT_DIR/pdf"
rm -rf $OUT_DIR
mkdir -p $OUT_DIR_HTML
mkdir -p $OUT_DIR_PDF

$HTML_CMD -D "$OUT_DIR_HTML" 02a_testing.adoc
$PDF_CMD -a pdf-theme=theme.yml -D "$OUT_DIR_PDF" 02a_testing.adoc
copy 00-intro/wireframes $OUT_DIR_HTML

# APIs
OUT_DIR="out/02b_apis"
OUT_DIR_HTML="$OUT_DIR/html"
OUT_DIR_PDF="$OUT_DIR/pdf"
rm -rf $OUT_DIR
mkdir -p $OUT_DIR_HTML
mkdir -p $OUT_DIR_PDF

copy 00-intro/wireframes $OUT_DIR_HTML
copy 02b_apis/docs/screenshots $OUT_DIR_HTML

$HTML_CMD -D "$OUT_DIR_HTML" 02b_apis.adoc
$PDF_CMD -a pdf-theme=theme.yml -D "$OUT_DIR_PDF" 02b_apis.adoc
