<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TweetDisplayController extends Controller
{
    /**
     * @Route("/tweets")
     */
    public function tweetAction()
    {
        return $this->render('AppBundle:TweetDisplay:tweet.html.twig', array(
            // ...
        ));
    }

}
