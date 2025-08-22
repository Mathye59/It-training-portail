<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\RangeFilter;

#[ApiFilter(SearchFilter::class, properties: [
    'titre' => 'partial',
    'diplomeObtenu' => 'exact',
    'minRequis' => 'exact',
    'financement' => 'exact',
    'etatSession' => 'exact',
    'prochaineSession' => 'exact',
    'lieu' => 'exact',
])]
#[ApiFilter(RangeFilter::class, properties: ['prix'])]
#[ApiResource(
    normalizationContext: ['groups' => ['formation:read']],
    denormalizationContext: ['groups' => ['formation:write']]
)]
#[ORM\Entity(repositoryClass: FormationRepository::class)]
#[Vich\Uploadable]
class Formation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['formation:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['formation:read'])]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['formation:read'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['formation:read'])]
    private ?int $duree = null;

    #[ORM\Column]
    #[Groups(['formation:read'])]
    private ?float $prix = null;

    #[ORM\Column(length: 255)]
    #[Groups(['formation:read'])]
    private ?string $diplomeObtenu = null;

    #[ORM\Column(length: 255)]
    #[Groups(['formation:read'])]
    private ?string $minRequis = null;

    #[Groups(['formation:read'])]
    #[ORM\Column(nullable: true)]
    private ?string $image = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups(['formation:read'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[Vich\UploadableField(mapping: 'formation_images', fileNameProperty: 'image')]
    private ?File $imageFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['formation:read'])]
    private ?string $etatSession = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['formation:read'])]
    private ?string $prochaineSession = null;

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

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    public function getImageUrl(): ?string
    {
        return $this->image ? '/uploads/formations/' . $this->image : null;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if ($imageFile !== null) {
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): void
    {
        $this->image = $image;
    }

    public function getEtatSession(): ?string
    {
        return $this->etatSession;
    }

    public function setEtatSession(?string $etatSession): static
    {
        $this->etatSession = $etatSession;
        return $this;
    }

    public function getProchaineSession(): ?string
    {
        return $this->prochaineSession;
    }

    public function setProchaineSession(?string $prochaineSession): static
    {
        $this->prochaineSession = $prochaineSession;
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
