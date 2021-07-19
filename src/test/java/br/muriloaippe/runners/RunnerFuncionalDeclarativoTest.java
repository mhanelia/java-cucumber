package br.muriloaippe.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/inserir_conta_declarativo.feature",
		glue = {"br.muriloaippe.steps", "br.muriloaippe.config"},
		tags = {"@funcionais"},
		plugin = {"pretty","html:target/report-html","json:target/json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerFuncionalDeclarativoTest {
	
	@BeforeClass
	public static void reset() {
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me");
		driver.findElement(By.id("email")).sendKeys("mr@mr");
		driver.findElement(By.id("senha")).sendKeys("mr@mr");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
}
