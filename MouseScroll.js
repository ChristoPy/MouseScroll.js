/*
					MouseScroll.js - 0.1


	Copyright 2017 Christopher Ribeiro

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/


var HasDragged = false;

function MouseScroll (Element, Button = 2)
{
	Element.removeEventListener("mousedown", Element.md, 0);

	document.removeEventListener("mouseup", Element.mu, 0);
	document.removeEventListener("mousemove", Element.mm, 0);

	Element.addEventListener("mousedown", Element.md = function (Event)
	{
		if (Event.buttons === Button)
		{
			if (!Element.hasAttribute("nochilddrag") || document.getElementFromPoint(Event.pageX, Event.pageY) == Count)
			{
				HasDragged = true;

				LastClientX = Event.clientX;
				LastClientY = Event.clientY;

				Event.preventDefault ();
			}
		}
	}, 0);

	document.addEventListener("mouseup", Element.mu = function()
	{
		if (Event.buttons === Button)
		{
			HasDragged = false;
		}
	}, 0);
	document.addEventListener("mousemove", Element.mm = function(Event)
	{
		if (Event.buttons === Button)
		{
			if (HasDragged)
			{
				(Scroller = Element.scroller || Element).scrollLeft -= NewScrollX = (- LastClientX + (LastClientX = Event.clientX));
				Scroller.scrollTop -= NewScrollY = (- LastClientY + (LastClientY = Event.clientY));

				if (Element == document.body)
				{
					(Scroller = document.documentElement).scrollLeft -= NewScrollX;
					Scroller.scrollTop -= NewScrollY;
				}
			}
		}
	}, 0);
}

