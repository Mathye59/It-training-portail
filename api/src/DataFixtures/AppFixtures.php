<?php

namespace App\DataFixtures;

use App\Entity\Formation;
use App\Entity\SousTheme;
use App\Entity\Theme;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create('fr_FR');
        $informatique = new Theme();
        $informatique->setNom('Informatique');
        $manager->persist($informatique);

        // Création des sous-thèmes
        $sousThemes = [];

        $sousThemesList = [
            'Cybersécurité',
            'Cloud Computing',
            'DevOps',
            'Développement Front-End',
            'Développement Back-End',
            'Développement Mobile',
            'Qualité Logicielle',
            'Architecture Logicielle',
            'Systèmes et Réseaux',
            'Automatisation',
        ];

        foreach ($sousThemesList as $nomSousTheme) {
            $sousTheme = new SousTheme();
            $sousTheme->setNom($nomSousTheme);
            $sousTheme->setTheme($informatique);
            $manager->persist($sousTheme);
            $sousThemes[$nomSousTheme] = $sousTheme;
        }

        // Formations avec plusieurs sous-thèmes associés
        $formationsData = [
            [
                'titre' => 'HTML & CSS : les bases',
                'description' => 'Structurez vos pages web avec HTML5 et stylisez-les avec CSS3.',
                'duree' => 20,
                'prix' => 790,
                'diplomeObtenu' => 'Niveau Brevet',
                'minRequis' => 'Aucun',
                'sousThemes' => ['Développement Front-End']
            ],
            [
                'titre' => 'JavaScript ES6+',
                'description' => 'Apprenez les fondamentaux modernes de JavaScript.',
                'duree' => 35,
                'prix' => 990,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['Développement Front-End']
            ],
            [
                'titre' => 'React.js complet',
                'description' => 'Construisez des interfaces dynamiques avec React.',
                'duree' => 40,
                'prix' => 1490,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Front-End', 'Développement Mobile']
            ],
            [
                'titre' => 'Vue.js fondations',
                'description' => 'Créez des applications interactives avec Vue.js.',
                'duree' => 35,
                'prix' => 1390,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Front-End']
            ],
            [
                'titre' => 'PHP & MySQL',
                'description' => 'Développement web dynamique avec PHP et MySQL.',
                'duree' => 45,
                'prix' => 1290,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Back-End']
            ],
            [
                'titre' => 'Symfony 6 avancé',
                'description' => 'Développez des applications robustes avec Symfony.',
                'duree' => 50,
                'prix' => 1990,
                'diplomeObtenu' => 'Bac+3',
                'minRequis' => 'Bac+2',
                'sousThemes' => ['Développement Back-End', 'Architecture Logicielle']
            ],
            [
                'titre' => 'Node.js & Express',
                'description' => 'API RESTful côté serveur avec Node.js.',
                'duree' => 40,
                'prix' => 1590,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Back-End']
            ],
            [
                'titre' => 'Python pour débutants',
                'description' => 'Bases du langage Python et automatisation simple.',
                'duree' => 30,
                'prix' => 950,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['Automatisation']
            ],
            [
                'titre' => 'Docker & CI/CD',
                'description' => 'Déploiement moderne avec Docker, GitHub Actions.',
                'duree' => 40,
                'prix' => 1690,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['DevOps']
            ],
            [
                'titre' => 'Tests avec PHPUnit',
                'description' => 'Tests automatisés en PHP avec PHPUnit.',
                'duree' => 25,
                'prix' => 890,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Qualité Logicielle']
            ],
            [
                'titre' => 'Principes SOLID',
                'description' => 'Concevez des logiciels maintenables et modulaires.',
                'duree' => 30,
                'prix' => 1290,
                'diplomeObtenu' => 'Bac+3',
                'minRequis' => 'Bac+2',
                'sousThemes' => ['Architecture Logicielle']
            ],
            [
                'titre' => 'Linux pour développeurs',
                'description' => 'Commandes de base et gestion de serveurs Linux.',
                'duree' => 35,
                'prix' => 990,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['Systèmes et Réseaux']
            ],
            [
                'titre' => 'Cybersécurité 101',
                'description' => 'Premiers pas dans la protection numérique.',
                'duree' => 30,
                'prix' => 1190,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['Cybersécurité']
            ],
            [
                'titre' => 'AWS : Déploiement cloud',
                'description' => 'Hébergez vos applis web avec Amazon Web Services.',
                'duree' => 35,
                'prix' => 1490,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Cloud Computing']
            ],
            [
                'titre' => 'Flutter mobile apps',
                'description' => 'Développement mobile multi-plateformes avec Flutter.',
                'duree' => 50,
                'prix' => 1990,
                'diplomeObtenu' => 'Bac+3',
                'minRequis' => 'Bac+2',
                'sousThemes' => ['Développement Mobile']
            ],
            [
                'titre' => 'Automatiser avec Python',
                'description' => 'Scripts Python pour l’automatisation quotidienne.',
                'duree' => 30,
                'prix' => 1090,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Automatisation']
            ],
            [
                'titre' => 'Git & GitHub',
                'description' => 'Travail collaboratif et gestion de version avec Git.',
                'duree' => 20,
                'prix' => 750,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['DevOps']
            ],
            [
                'titre' => 'MongoDB & NoSQL',
                'description' => 'Bases de données orientées documents.',
                'duree' => 32,
                'prix' => 1290,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Back-End']
            ],
            [
                'titre' => 'Responsive Design',
                'description' => 'Adaptabilité mobile-first en CSS.',
                'duree' => 28,
                'prix' => 820,
                'diplomeObtenu' => 'Bac',
                'minRequis' => 'Brevet',
                'sousThemes' => ['Développement Front-End']
            ],
            [
                'titre' => 'TypeScript',
                'description' => 'Ajoutez du typage à vos projets JavaScript.',
                'duree' => 34,
                'prix' => 1290,
                'diplomeObtenu' => 'Bac+2',
                'minRequis' => 'Bac',
                'sousThemes' => ['Développement Front-End']
            ],
        ];

        foreach ($formationsData as $data) {
            $formation = new Formation();
            $formation->setTitre($data['titre']);
            $formation->setDescription($data['description']);
            $formation->setDuree($data['duree']);
            $formation->setPrix($data['prix']);
            $formation->setDiplomeObtenu($data['diplomeObtenu']);
            $formation->setMinRequis($data['minRequis']);
            $formation->setUpdatedAt(new \DateTimeImmutable());
            $formation->setEtatSession($faker->randomElement(['Formation en cours', 'Formation cloturée']));
            $formation->setProchaineSession($faker->date('d/m/Y'));

            foreach ($data['sousThemes'] as $nomSousTheme) {
                if (isset($sousThemes[$nomSousTheme])) {
                    $formation->addSousTheme($sousThemes[$nomSousTheme]);
                }
            }

            $manager->persist($formation);
        }

        $manager->flush();
    }
}
