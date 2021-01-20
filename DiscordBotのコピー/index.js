require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: '-自由に使ってください-' } });
});

client.on('message', message => {
    if (message.author.id == client.user.id || message.author.bot) {
        return;
    }
    if (message.content === '!knらん') {
        let channel = message.channel;
        let author = message.author.username;
        var weaponset = 0
        shuffling();
        let arandomizer = 'あなたは - ' + randomcrab() + '\n' + weaponset;
        message.reply(arandomizer).then(message => console.log(`Sent message: ${arandomizer} `)).catch(console.error);
        return;
    }
    if (message.content === '!knしん') {
        let channel = message.channel;
        let author = message.author.username;
        var weaponset = 0
        shuffling();
        let brandomizer = 'ホスト：' + randomcrab() + '\n' + weaponset
        shuffling();
        brandomizer += '\n' + '\n' + 'ゲスト：' + randomcrab() + '\n' + weaponset;
        message.reply(brandomizer).then(message => console.log(`Sent message: ${ brandomizer } `)).catch(console.error);
        return;
    }
    if (message.content === '!knたっぐ') {
        let channel = message.channel;
        let author = message.author.username;
        var weaponset = 0
        shuffling();
        let drandomizer = 'ホスト：' + randomcrab() + '\n' + weaponset
        shuffling();
        drandomizer += '\n' + '\n' + 'ホストのパートナー：' + randomcrab() + '\n' + weaponset;
        shuffling();
        drandomizer += '\n' + '\n' + 'ホストの対面：' + randomcrab() + '\n' + weaponset;
        shuffling();
        drandomizer += '\n' + '\n' + '対面のパートナー：' + randomcrab() + '\n' + weaponset;
        message.reply(drandomizer).then(message => console.log(`Sent message: ${drandomizer}`)).catch(console.error);
        return;
    }
    function randomweapon() {
        var weapon = { ステゴロ: '片手', ナイフ: '片手', ソード: '片手', カタナ: '片手', ショーテル: '片手', レイピア: '片手', ハンドアックス: '片手', ダガー: '片手', カタール: '片手', コチョウトウ: '片手', ビームセイバー: '片手', ヘビーソード: '片手', ジャバラケン: '片手', ジャベリン: '片手', ランス: '片手', トライデント: '片手', バール: '片手', バット: '片手', メイス: '片手', ウォーハンマー: '片手', トンファー: '片手', フレイル: '片手', ヌンチャク: '片手', ガーダ: '片手', リボルバー: '片手', ショットガン: '片手', アックスガン: '片手', サイ: '片手', シールド: '片手', クサリガマ: '片手', ジェット: '片手', アンカー: '片手', テッセン: '片手', ブーメラン: '片手', ドリル: '片手', パイルバンカー: '片手', クレイモア: '両手', グアンダオ: '両手', ハルバード: '両手', チェーンソー: '両手', グレートハンマー: '両手', ノダチ: '両手', ダブルセイバー: '両手', エクスカニバー: '両手', バルディッシュ: '両手', サンセツコン: '両手', アザラシ: 'のりもの', スクーター: 'のりもの' };
        //武器種連想配列
        const keys = Object.keys(weapon);
        //武器名配列

        var weaponset = 0; //左右ランダム武器セット
        var random = Math.floor(Math.random() * keys.length);  //右手の武器を抽選
        var r = (keys[random]);  //r = 右手の武器名
        var rtype = (weapon[r]);  //rtype = 右手の武器の種類
        var weaponl = [];
        var l = 0
        var i = 0
        if (rtype === '片手') {
            //武器が片手だったら

            for (i = 0; i < keys.length; i++) {
                //全武器をチェック
                if (weapon[keys[i]] !== '両手') {
                    //片手武器かのりものなら（両手武器でないなら）
                    weaponl.push(keys[i]);
                    //保存
                }
            }
            var random = Math.floor(Math.random() * weaponl.length);
            //武器抽選
            var l = (weaponl[random]);
            //l = 左手の武器名
        }

        if (rtype === '両手') {
            //武器が両手だったら
            l = r;
            //右手と左手は同じ武器
        }

        if (rtype === 'のりもの') {
            //武器がのりものだったら
            for (i = 0; i < keys.length; i++) {
                //全武器をチェック
                if (weapon[keys[i]] === '片手') {
                    //片手武器なら
                    weaponl.push(keys[i]);
                    //保存
                }
            }
            random = Math.floor(Math.random() * weaponl.length);
            //武器抽選
            var l = (weaponl[random]);
            //l = 左手の武器名
        }
        return [r, l];
    }
    function shuffling() {
        var shuffle = Math.floor(Math.random() * 2);
        var sayuu = randomweapon()
        if (shuffle === 0) {
            weaponset = ('右手：' + sayuu[0] + '　左手：' + sayuu[1]);
        } else {
            weaponset = ('右手：' + sayuu[1] + '　左手：' + sayuu[0]);
        }
        /*
     武器を表示する際、50%の確率で入れ替わる。
     これによってプログラムの構成上、
     左手より右手にのりものが来やすくなっていた
     問題を解決できる
     */
    }

    function randomcrab() {
        var crab = ['ズワイガニ', 'ガザミ', 'トラフカラッパ', 'エンコウガニ', 'ヒシガニ', 'ケガニ', 'ベニイワガニ', 'モズクガニ', 'アサヒガニ', 'ロブスター', 'ダンジネスクラブ', 'クリスマスアカガニ', 'ノコギリガザミ', 'オオホモラ', 'ヤシガニ', 'タラバガニ', 'オオカイカムリ', 'タカアシガニ', 'メタルクラブ', 'タスマニアオオガニ', 'シャコ', 'シオマネキ', 'ハナサキガニ']
        var random = Math.floor(Math.random() * crab.length);
        return crab[random];
    }

});

if (process.env.DISCORD_TOKEN == undefined) {
    console.log('DISCORD_TOKENが設定されていません。');
    process.exit(0);
}

client.login(process.env.DISCORD_TOKEN);

function sendReply(message, text) {
    message.reply(text)
        .then(console.log("リプライ送信: " + text))
        .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
    client.channels.get(channelId).send(text, option)
        .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
        .catch(console.error);
}
