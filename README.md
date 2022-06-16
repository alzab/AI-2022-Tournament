# COMP30024 AI 2022: Tournament Results

In this repository we reveal the complete *Cachex* tournament results. As presented in the final lecture, congratulations to our champions ```slips_and_falls```, and runners-up ```jarvis```!

### Brackets visualisation
See a visualisation of the final brackets [here](https://alzab.github.io/AI-2022-Tournament/)! Mostly tested on Chrome, so try that if you have issues with another browser. If you have a smaller screen it could also help to zoom out if you don't like horizontal scrolling.

### Tournament structure
This was a single-elimination tournament with **7 rounds** total. The draw itself was randomised after qualification of exactly 128 teams. Each match between two teams consisted of a minimum four games as follows:

- N=8 / Red / Blue
- N=8 / Blue / Red
- N=9 / Red / Blue
- N=9 / Blue / Red

The goal was to test on both target board sizes (8 and 9), but also enable each team to play as red and blue an equal number of times. In rare cases where matches were draws (2-2) at this point, tie-breakers were played on differing board sizes until a winner prevailed. Almost always a team had to attain a lead of two games to win the match, hence requiring strong play as both 'red' and 'blue' to continue to the next round. Very occasionally manual intervention was required to determine a winner (e.g. weird halting issues or pathological draw cases never enabling a 2-game lead). The tournament ran overnight on Dimefox as per the project specification.

### Qualification
There were roughly ~160 teams and exactly 128 qualified for the draw. Qualification was based on the date of the submission, and whether manual interventions were required to run the respective team agent (and a bit of pot luck too). **Don't worry if you did not qualify or make it far** -- remember that the tournament was not assessed in any way. Issues that prevented automatic qualification to the tournament were almost always manually resolved by us for the purposes of marking your projects, and in most cases they were minor!

### Interpreting results
The easiest way to see how your team fared is to use the [brackets visualisation tool](https://alzab.github.io/AI-2022-Tournament/). While a lot of scrolling is required, you should be able to find your team name on the left-hand side of brackets if you qualified. This should match your Canvas team name, but can vary *slightly* if you named your player class differently in the actual project submission. Each match has a summary of results below it in the form ```[Team A #Wins] - [Team B #Wins] - [#Draws]```. This is linked to the raw game results uploaded in this repository.

### Issues
Feel free to email myself (Alex) if you have any queries. We're prioritising requests related to graded assessments at the moment, but I'm still happy to discuss your tournament results if there's anything you are curious about!


