import app from 'flarum/admin/app';

app.initializers.add('chrisdenend/flarum-ext-generate-usernames', () => {
  app.extensionData
    .for('chrisdenend-generate-usernames')
    .registerSetting({
      setting: 'chrisdenend-generate-usernames.adj_tokens',
      type: 'text',
      label: app.translator.trans('chrisdenend-generate-usernames.admin.settings.adj_tokens_label'),
    })
    .registerSetting({
      setting: 'chrisdenend-generate-usernames.noun_tokens',
      type: 'text',
      label: app.translator.trans('chrisdenend-generate-usernames.admin.settings.noun_tokens_label'),
    })
    .registerSetting({
      setting: 'chrisdenend-generate-usernames.digits',
      type: 'number',
      label: app.translator.trans('chrisdenend-generate-usernames.admin.settings.digits_label'),
    })
});