import { extend } from "flarum/common/extend";
import Stream from "flarum/common/utils/Stream";
import app from 'flarum/forum/app';
import SignUpModal from "flarum/forum/components/SignUpModal";
import extractText from 'flarum/common/utils/extractText';
import Select from 'flarum/common/components/Select';



app.initializers.add('chrisdenend/flarum-ext-generate-usernames', () => {

  function getUsernameOptions(count) {

    let options = [];

    const adjTokens = app.forum.attribute('adjTokens'); 
    const nounTokens = app.forum.attribute('nounTokens');
    const digits = app.forum.attribute('usernameDigits');

    const adjArray = adjTokens.split(',');
    const nounArray = nounTokens.split(',');

    for (var i=0; i<count; i++)
    {
      var randomWord1 = adjArray[Math.floor(Math.random() * adjArray.length)];
      var randomWord2 = nounArray[Math.floor(Math.random() * nounArray.length)];

      var randomNumber = "";
      if (digits > 0 && digits < 11) {
        const arr = new Uint32Array(2);
        crypto.getRandomValues(arr);
        randomNumber =arr.join('').substring(0, digits);
      }

      var randomUsername = randomWord1 + randomWord2 + randomNumber;

      options[i] = randomUsername;
    }

    return options;
  }

  function getUsernameOptionsMap(usernameOptions) {
    var newMap = new Object();

    for (var i=0; i<usernameOptions.length; i++) {
      newMap[usernameOptions[i]] = usernameOptions[i];
    }

    return newMap;
  }

  
  extend(SignUpModal.prototype, "oninit", function () {

    this.usernameOptions = getUsernameOptions(15);

    this.selectedUsername = Stream(this.usernameOptions[0]);

  });

  extend(SignUpModal.prototype, "onready", function () {

   this.$('[name=email]').select();

  })

  extend(SignUpModal.prototype, "fields", function (items) {

    const usernameSelectLabel = extractText(app.translator.trans("chrisdenend-generate-usernames.forum.username_select_placeholder"));
    const selectLabel = extractText(app.translator.trans("chrisdenend-generate-usernames.forum.username_select_label"));

    items.remove('username');

    items.add(
      "chrisdenendUsernameSelect",
      <div class="Form_group UsernameSelect">
        <Select 
          className="FormControl" 
          name="selectedUsername" 
          options={getUsernameOptionsMap(this.usernameOptions)}
          value={this.selectedUsername()}
          onchange={this.selectedUsername}
          placeholder={usernameSelectLabel}
          aria-label={usernameSelectLabel}
          disabled={this.loading}
          >
        </Select>
        <label for="selectedUsername">{selectLabel}</label>
    </div>,
      15
    )

  });

  extend(SignUpModal.prototype, "submitData", function (data) { 
    // check that the username is valid
    if (this.usernameOptions.includes(this.selectedUsername())){
      data.username = this.selectedUsername();
    } else {
      data.username = this.usernameOptions[0];
    }

  });

});
