<?php
$key = 'Your api token key';
$channelId = 'Your channel id';

function get_curl($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    curl_close($curl);

    return json_decode($result, true);
}

$urlTSV = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id='. $channelId .'&key='. $key;
$result = get_curl($urlTSV);

$youtubeProfilePic = $result['items'][0]['snippet']['thumbnails']['high']['url'];
$youtubeTitle = $result["items"][0]["snippet"]['title'];
$youtubeSubs = $result["items"][0]["statistics"]["subscriberCount"];
$youtubeViews = $result["items"][0]["statistics"]["viewCount"];

// Latest Video
$urlV = 'https://www.googleapis.com/youtube/v3/search?key='. $key .'&channelId='. $channelId .'&maxResults=1&order=date&part=snippet';
$urlLatest = get_curl($urlV);

$latestVideoId = $urlLatest['items'][0]['id']['videoId'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
        .ig-thumbnail{
            width: 100px;
            height: 100px;
            float: left;
            overflow: hidden;
        }

        .ig-thumbnail img{
            width: 100px;
        }
    </style>
</head>
<body class="bg-light">

<section class="social" id="social">
    <div class="container">
        <div class="row pt-4 mb-4">
            <div class="col text-center">
                <h2>Social Media</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-4">
                        <img src="<?= $youtubeProfilePic ?>" width="200" class="rounded-circle img-thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h5><?= $youtubeTitle ?></h5>
                        <p><?= $youtubeSubs ?> Subscribers</p>
                        <p><?= $youtubeViews ?> Views</p>

                        <div class="g-ytsubscribe" data-channelid="UCdhq4Zb1s_HiHET_33GTtXA" data-layout="default" data-theme="dark" data-count="hidden"></div>
                    </div>
                </div>

                <div class="row mt-3 ">
                    <div class="col">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/<?= $latestVideoId ?>" title="YouTube video" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-4">
                        <img src="../img/profile.png" width="200" class="rounded-circle img-thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h5>@driannaird</h5>
                        <p>70000 Folowers.</p>
                    </div>
                </div>

                <div class="row mt-3 mb-3">
                    <div class="col">
                        <div class="ig-thumbnail">
                            <img src="../img/profile.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

<script src="https://apis.google.com/js/platform.js"></script>
</body>
</html>