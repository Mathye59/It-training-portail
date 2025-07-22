<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FormationRepository::class)]
#[ApiResource]
class Formation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column]
    private ?int $duree = null;

    #[ORM\Column]
    private ?float $prix = null;

    #[ORM\Column(length: 255)]
    private ?string $diplomeObtenu = null;

    #[ORM\Column(length: 255)]
    private ?string $minRequis = null;

    /**
     * @var Collection<int, SousTheme>
     */
    #[ORM\ManyToMany(targetEntity: SousTheme::class, inversedBy: 'formations')]
    private Collection $sousThemes;

    public function __construct()
    {
        $this->sousThemes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(int $duree): static
    {
        $this->duree = $duree;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): static
    {
        $this->prix = $prix;

        return $this;
    }

    public function getDiplomeObtenu(): ?string
    {
        return $this->diplomeObtenu;
    }

    public function setDiplomeObtenu(string $diplomeObtenu): static
    {
        $this->diplomeObtenu = $diplomeObtenu;

        return $this;
    }

    public function getMinRequis(): ?string
    {
        return $this->minRequis;
    }

    public function setMinRequis(string $minRequis): static
    {
        $this->minRequis = $minRequis;

        return $this;
    }

    /**
     * @return Collection<int, SousTheme>
     */
    public function getSousThemes(): Collection
    {
        return $this->sousThemes;
    }

    public function addSousTheme(SousTheme $sousTheme): static
    {
        if (!$this->sousThemes->contains($sousTheme)) {
            $this->sousThemes->add($sousTheme);
        }

        return $this;
    }

    public function removeSousTheme(SousTheme $sousTheme): static
    {
        $this->sousThemes->removeElement($sousTheme);

        return $this;
    }
}
