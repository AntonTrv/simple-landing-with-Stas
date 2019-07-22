echo "Resetting Webstorm"
rm $HOME/Library/Preferences/WebStorm2019.1.plist
rm $HOME/Library/Preferences/WebStorm2019.1/eval/*.key
sed -i'' -e '/evlsprt/d' $HOME/Library/Preferences/WebStorm2019.1/options/options.xml
