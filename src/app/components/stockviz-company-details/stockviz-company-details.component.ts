import { Component, OnInit } from '@angular/core';
import { ReadMoreOptions } from '@minni/read-more';
import { CommonService } from 'src/app/service/common-service';

@Component({
  selector: 'app-stockviz-company-details',
  templateUrl: './stockviz-company-details.component.html',
  styleUrls: ['./stockviz-company-details.component.scss']
})
export class StockvizCompanyDetailsComponent implements OnInit {

  clickedCompany: any;
  description: string | undefined;
  constructor(private service:CommonService) {
    this.service.clickedCompany$.subscribe((data) => {
      this.clickedCompany = data;
      this.description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate saepe excepturi labore aut doloribus quas recusandae at aspernatur reiciendis veniam! Nihil odit exercitationem ducimus rem nam libero, illum et nulla?
      Quasi iste cumque, ipsam laudantium accusamus esse tempora voluptates hic commodi. Eaque nulla tempora blanditiis esse voluptatum, molestias iusto aliquid veniam earum saepe minus suscipit quibusdam cumque architecto magnam impedit?
      Deserunt, earum! Molestiae dolorem odit nobis perferendis alias aliquid tempore ipsam sint laborum explicabo ipsa ullam modi, commodi illo saepe! Reprehenderit autem temporibus harum iure quas recusandae facilis aliquam itaque.
      Deserunt, quasi commodi deleniti fugiat ullam excepturi minus accusantium ad, laboriosam illo, cum sint labore voluptas distinctio nulla culpa. Dolorum reiciendis non aspernatur, dicta nobis ipsa sapiente alias ratione commodi.
      Repudiandae tenetur quod reprehenderit, quasi aliquam a totam harum voluptates facilis impedit molestiae ea repellat provident rerum eos optio! Enim fuga dignissimos obcaecati ducimus neque, consequatur unde ea sunt numquam.`
    });
}
  readMoreOption: ReadMoreOptions = {
  readLessText: 'Read less',
  readMoreText: 'Read more',
  styles: {
    padding: '0',
    fontFamily: 'Roboto',
    color: 'grey'
  },
  classes: []
}
  ngOnInit(): void {

  }

}
