<?php

namespace App\DataFixtures;

use App\Entity\Theme;
use App\Entity\SousTheme;
use App\Entity\Formation;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Thème Informatique
        $informatique = new Theme();
        $informatique->setNom('Informatique');
        $manager->persist($informatique);

        $web = new SousTheme();
        $web->setNom('Développement web');
        $web->setTheme($informatique);
        $manager->persist($web);

        $reseau = new SousTheme();
        $reseau->setNom('Réseaux & systèmes');
        $reseau->setTheme($informatique);
        $manager->persist($reseau);

        // Thème Restauration
        $restauration = new Theme();
        $restauration->setNom('Restauration');
        $manager->persist($restauration);

        $cuisine = new SousTheme();
        $cuisine->setNom('Cuisine collective');
        $cuisine->setTheme($restauration);
        $manager->persist($cuisine);

        $service = new SousTheme();
        $service->setNom('Service en salle');
        $service->setTheme($restauration);
        $manager->persist($service);

        // Ajoute d'autres thèmes/sous-thèmes ici si besoin

        $manager->flush();
    }
}
