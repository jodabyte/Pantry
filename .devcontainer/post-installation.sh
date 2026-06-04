#!/bin/bash

echo "Enable Angular CLI autocompletion"
ng completion script | sudo tee /usr/share/bash-completion/completions/ng > /dev/null
ng config -g cli.completion.prompted true