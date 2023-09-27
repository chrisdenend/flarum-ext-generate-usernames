<?php

/*
 * This file is part of chrisdenend/flarum-ext-generate-usernames.
 *
 * Copyright (c) 2023 Chris Denend.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace ChrisDenend\GenerateUsernames;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
    ->default('chrisdenend-generate-usernames.adj_tokens', "Adjective1,Adjective2")
     ->default('chrisdenend-generate-usernames.noun_tokens', "Noun1,Noun2")
     ->default('chrisdenend-generate-usernames.digits', "3")
     ->serializeToForum('adjTokens', 'chrisdenend-generate-usernames.adj_tokens', null)
     ->serializeToForum('nounTokens', 'chrisdenend-generate-usernames.noun_tokens', null)
     ->serializeToForum('usernameDigits', 'chrisdenend-generate-usernames.digits', null)

];
