\c prolif;

INSERT INTO artists (artistname, date_of_birth, starsign, ethnic_origin, art_sector, save_for_inspo) VALUES
('Jean-Michel Basquiat', '1960-01-22', 'Capricorn', 'Afro-Latino (Haitian & Puerto Rican)', 'Contemporary, Neo-expressionism, Primitivism', TRUE),
('Kara Walker', '1969-11-26', 'Sagittarius', 'African American', 'Contemporary, Cut-paper Silhouettes', TRUE),
('Jacob Lawrence', '1917-09-07', 'Virgo', 'African American', 'Narrative Art, Social Realism', TRUE),
('Romare Bearden', '1911-09-02', 'Virgo', 'African American', 'Collage, Social Commentary', FALSE);


INSERT INTO artwork (title, art_sector, date_created, statement, save_for_inspo) VALUES

('Untitled', 'Neo-expressionism', '1981-01-01', 'A raw, vibrant painting reflecting the artists visceral response to contemporary issues.', TRUE),
('Hollywood Africans', 'Neo-expressionism', '1983-01-01', 'A commentary on racial stereotypes and the American experience.', TRUE),
('Boy and Dog in a Johnnypump', 'Neo-expressionism', '1982-01-01', 'Depicts a young boy and a dog, exploring themes of childhood and urban life.', TRUE),
('Irony of Negro Policeman', 'Neo-expressionism', '1981-01-01', 'A provocative work critiquing the role of African American policemen in a racially charged society.', TRUE),

('A Subtlety, or the Marvelous Sugar Baby', 'Contemporary, Cut-paper Silhouettes', '2014-05-01', 
'This large-scale installation at the old Domino Sugar Factory in Brooklyn reflects themes of race, gender, and labor through an intricately cut sugar-coated sculpture.', TRUE),
('The End of Uncle Tom and the Grand Allegorical Tableau of Eva in Heaven', 'Contemporary, Cut-paper Silhouettes', '1995-01-01', 
'A powerful installation featuring cut-paper silhouettes that address themes of slavery and racial stereotypes with stark imagery.', TRUE),
('Gone: An Historical Romance of a Civil War as It Occurred Between the Dusky Thighs of One Young Negress and Her Heart', 'Contemporary, Cut-paper Silhouettes', '2000-01-01', 
'An evocative piece featuring intricate silhouettes that explore themes of violence, sexual exploitation, and historical trauma.', TRUE),

('The Migration Series (Panel 1)', 'Narrative Art, Social Realism', '1940-01-01', 
'The first panel of Lawrences series depicting the migration of African Americans from the rural South to urban areas in the North.', TRUE),
('The Migration Series (Panel 9)', 'Narrative Art, Social Realism', '1940-01-01', 
'This panel illustrates the struggles and challenges faced by African American migrants in their new urban environments.', TRUE),
('The Migration Series (Panel 16)', 'Narrative Art, Social Realism', '1940-01-01', 
'Panel 16 shows the transformation of the migrants lives and their adaptation to their new surroundings.', TRUE),

('The Block', 'Collage, Social Commentary', '1967-01-01', 
'A vibrant collage representing the life and struggles of African Americans in urban settings, depicting scenes of community life and cultural vibrancy.', FALSE),
('Three Folk Musicians', 'Collage, Social Commentary', '1967-01-01', 
'This work features three musicians performing in a colorful, dynamic collage that celebrates African American music and culture.', TRUE),
('The Odyssey Series (Panel 1)', 'Collage, Social Commentary', '1977-01-01', 
'The first panel of Beardens "Odyssey Series" reimagines Homers epic through a modern, African American lens, reflecting themes of journey and perseverance.', TRUE);


