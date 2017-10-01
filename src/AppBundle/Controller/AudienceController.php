<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Form\TweetType;
use AppBundle\Entity\Tweet;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Repository\TweetRepository;

class AudienceController extends Controller
{
    /**
     * @Route("/tweet", name="tweet")
     */
    public function tweetAction(Request $request)
    {
        $msg = $request->query->get('msg');
        $tweet = new Tweet();
        $form = $this->createForm(TweetType::class, $tweet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $tweet = $form->getData();
    
            $em = $this->getDoctrine()->getManager();
            $em->persist($tweet);
            $em->flush();
    
            return $this->redirectToRoute('tweet', [ 'msg' => 'Successfuly Sent!' ]);
        }

        return $this->render('AppBundle:Audience:tweet.html.twig', [ 
            "form" => $form->createView(),
            "msg" => $msg,
        ]);
    }

    /**
     * @Route("/tweet/view", name="tweet_view")
     */
    public function tweetViewAction(Request $request)
    {
        return $this->render('AppBundle:Audience:tweet_view.html.twig', [ 
            //
        ]);
    }
    
    /**
     * @Route("/tweet/check", name="tweet_check")
     */
    public function tweetCheck(Request $request)
    {
        $num = $request->get('num');

        $tweets = $this->getDoctrine()->getRepository(Tweet::class)->getNewTweets($num); 

        $response = new Response();
        $response->setContent(
            json_encode(['new_tweets' => $tweets ,'num' => $num + sizeof($tweets) ])
        );

        return $response;
    }

}
