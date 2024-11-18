set -eu

DIR="$(dirname "$(readlink -f "$0")")"

cd "$DIR"

FOLDER="$(basename "$DIR")"
GH_DIR="$DIR/../../crlinm-JSFE2024Q4-gh-pages/$FOLDER"
CONTAINER_NAME=NODE1234

rm -rf dist

docker exec $CONTAINER_NAME bash -c "cd $FOLDER && yarn build"

rm -rf "$GH_DIR"
cp -r dist "$GH_DIR"

cd "$GH_DIR"
git add .
git commit -m "deploy $FOLDER"
git push
