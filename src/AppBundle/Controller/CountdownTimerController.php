<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class CountdownTimerController extends Controller
{
    /**
     * @Route("/timer")
     */
    public function timerAction()
    {
        return $this->render('AppBundle:CountdownTimer:timer.html.twig', array(
            // ...
        ));
    }

}
