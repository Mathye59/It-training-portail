<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250731091522 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE formation (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, duree INT NOT NULL, prix DOUBLE PRECISION NOT NULL, diplome_obtenu VARCHAR(255) NOT NULL, min_requis VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation_sous_theme (formation_id INT NOT NULL, sous_theme_id INT NOT NULL, INDEX IDX_103934D45200282E (formation_id), INDEX IDX_103934D4514C40D2 (sous_theme_id), PRIMARY KEY(formation_id, sous_theme_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sous_theme (id INT AUTO_INCREMENT NOT NULL, theme_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_E891E7ED59027487 (theme_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE formation_sous_theme ADD CONSTRAINT FK_103934D45200282E FOREIGN KEY (formation_id) REFERENCES formation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE formation_sous_theme ADD CONSTRAINT FK_103934D4514C40D2 FOREIGN KEY (sous_theme_id) REFERENCES sous_theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sous_theme ADD CONSTRAINT FK_E891E7ED59027487 FOREIGN KEY (theme_id) REFERENCES theme (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE formation_sous_theme DROP FOREIGN KEY FK_103934D45200282E');
        $this->addSql('ALTER TABLE formation_sous_theme DROP FOREIGN KEY FK_103934D4514C40D2');
        $this->addSql('ALTER TABLE sous_theme DROP FOREIGN KEY FK_E891E7ED59027487');
        $this->addSql('DROP TABLE formation');
        $this->addSql('DROP TABLE formation_sous_theme');
        $this->addSql('DROP TABLE sous_theme');
        $this->addSql('DROP TABLE theme');
    }
}
