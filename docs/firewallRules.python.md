# `firewallRules` Submodule <a name="`firewallRules` Submodule" id="@cdktf/provider-upcloud.firewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallRules <a name="FirewallRules" id="@cdktf/provider-upcloud.firewallRules.FirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules upcloud_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]],
  server_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.firewallRule">firewall_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | The unique id of the server to be protected the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#id FirewallRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule`<sup>Required</sup> <a name="firewall_rule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.firewallRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.serverId"></a>

- *Type:* str

The unique id of the server to be protected the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#id FirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule">put_firewall_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_firewall_rule` <a name="put_firewall_rule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule"></a>

```python
def put_firewall_rule(
  value: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRules.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirewallRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule">firewall_rule</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput">firewall_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule`<sup>Required</sup> <a name="firewall_rule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule"></a>

```python
firewall_rule: FirewallRulesFirewallRuleList
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a>

---

##### `firewall_rule_input`<sup>Optional</sup> <a name="firewall_rule_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput"></a>

```python
firewall_rule_input: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallRulesConfig <a name="FirewallRulesConfig" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]],
  server_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule">firewall_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId">server_id</a></code> | <code>str</code> | The unique id of the server to be protected the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#id FirewallRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule`<sup>Required</sup> <a name="firewall_rule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule"></a>

```python
firewall_rule: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

The unique id of the server to be protected the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#id FirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallRulesFirewallRule <a name="FirewallRulesFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRulesFirewallRule(
  action: str,
  direction: str,
  comment: str = None,
  destination_address_end: str = None,
  destination_address_start: str = None,
  destination_port_end: str = None,
  destination_port_start: str = None,
  family: str = None,
  icmp_type: str = None,
  protocol: str = None,
  source_address_end: str = None,
  source_address_start: str = None,
  source_port_end: str = None,
  source_port_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action">action</a></code> | <code>str</code> | Action to take if the rule conditions are met. Valid values `accept \| drop`. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction">direction</a></code> | <code>str</code> | The direction of network traffic this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment">comment</a></code> | <code>str</code> | Freeform comment string for the rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd">destination_address_end</a></code> | <code>str</code> | The destination address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart">destination_address_start</a></code> | <code>str</code> | The destination address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd">destination_port_end</a></code> | <code>str</code> | The destination port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart">destination_port_start</a></code> | <code>str</code> | The destination port range starts from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family">family</a></code> | <code>str</code> | The address family of new firewall rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType">icmp_type</a></code> | <code>str</code> | The ICMP type. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol">protocol</a></code> | <code>str</code> | The protocol this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd">source_address_end</a></code> | <code>str</code> | The source address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart">source_address_start</a></code> | <code>str</code> | The source address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd">source_port_end</a></code> | <code>str</code> | The source port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart">source_port_start</a></code> | <code>str</code> | The source port range starts from this port number. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action"></a>

```python
action: str
```

- *Type:* str

Action to take if the rule conditions are met. Valid values `accept | drop`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#action FirewallRules#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of network traffic this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#direction FirewallRules#direction}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment"></a>

```python
comment: str
```

- *Type:* str

Freeform comment string for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#comment FirewallRules#comment}

---

##### `destination_address_end`<sup>Optional</sup> <a name="destination_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd"></a>

```python
destination_address_end: str
```

- *Type:* str

The destination address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}

---

##### `destination_address_start`<sup>Optional</sup> <a name="destination_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart"></a>

```python
destination_address_start: str
```

- *Type:* str

The destination address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}

---

##### `destination_port_end`<sup>Optional</sup> <a name="destination_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd"></a>

```python
destination_port_end: str
```

- *Type:* str

The destination port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}

---

##### `destination_port_start`<sup>Optional</sup> <a name="destination_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart"></a>

```python
destination_port_start: str
```

- *Type:* str

The destination port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family"></a>

```python
family: str
```

- *Type:* str

The address family of new firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#family FirewallRules#family}

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

The ICMP type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#protocol FirewallRules#protocol}

---

##### `source_address_end`<sup>Optional</sup> <a name="source_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd"></a>

```python
source_address_end: str
```

- *Type:* str

The source address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}

---

##### `source_address_start`<sup>Optional</sup> <a name="source_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart"></a>

```python
source_address_start: str
```

- *Type:* str

The source address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}

---

##### `source_port_end`<sup>Optional</sup> <a name="source_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd"></a>

```python
source_port_end: str
```

- *Type:* str

The source port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}

---

##### `source_port_start`<sup>Optional</sup> <a name="source_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart"></a>

```python
source_port_start: str
```

- *Type:* str

The source port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallRulesFirewallRuleList <a name="FirewallRulesFirewallRuleList" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRulesFirewallRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirewallRulesFirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirewallRulesFirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>]]

---


### FirewallRulesFirewallRuleOutputReference <a name="FirewallRulesFirewallRuleOutputReference" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import firewall_rules

firewallRules.FirewallRulesFirewallRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd">reset_destination_address_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart">reset_destination_address_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd">reset_destination_port_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart">reset_destination_port_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd">reset_source_address_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart">reset_source_address_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd">reset_source_port_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart">reset_source_port_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_destination_address_end` <a name="reset_destination_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd"></a>

```python
def reset_destination_address_end() -> None
```

##### `reset_destination_address_start` <a name="reset_destination_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart"></a>

```python
def reset_destination_address_start() -> None
```

##### `reset_destination_port_end` <a name="reset_destination_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd"></a>

```python
def reset_destination_port_end() -> None
```

##### `reset_destination_port_start` <a name="reset_destination_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart"></a>

```python
def reset_destination_port_start() -> None
```

##### `reset_family` <a name="reset_family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_source_address_end` <a name="reset_source_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd"></a>

```python
def reset_source_address_end() -> None
```

##### `reset_source_address_start` <a name="reset_source_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart"></a>

```python
def reset_source_address_start() -> None
```

##### `reset_source_port_end` <a name="reset_source_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd"></a>

```python
def reset_source_port_end() -> None
```

##### `reset_source_port_start` <a name="reset_source_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart"></a>

```python
def reset_source_port_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput">destination_address_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput">destination_address_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput">destination_port_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput">destination_port_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput">source_address_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput">source_address_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput">source_port_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput">source_port_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd">destination_address_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart">destination_address_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd">destination_port_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart">destination_port_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd">source_address_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart">source_address_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd">source_port_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart">source_port_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `destination_address_end_input`<sup>Optional</sup> <a name="destination_address_end_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput"></a>

```python
destination_address_end_input: str
```

- *Type:* str

---

##### `destination_address_start_input`<sup>Optional</sup> <a name="destination_address_start_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput"></a>

```python
destination_address_start_input: str
```

- *Type:* str

---

##### `destination_port_end_input`<sup>Optional</sup> <a name="destination_port_end_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput"></a>

```python
destination_port_end_input: str
```

- *Type:* str

---

##### `destination_port_start_input`<sup>Optional</sup> <a name="destination_port_start_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput"></a>

```python
destination_port_start_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_address_end_input`<sup>Optional</sup> <a name="source_address_end_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput"></a>

```python
source_address_end_input: str
```

- *Type:* str

---

##### `source_address_start_input`<sup>Optional</sup> <a name="source_address_start_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput"></a>

```python
source_address_start_input: str
```

- *Type:* str

---

##### `source_port_end_input`<sup>Optional</sup> <a name="source_port_end_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput"></a>

```python
source_port_end_input: str
```

- *Type:* str

---

##### `source_port_start_input`<sup>Optional</sup> <a name="source_port_start_input" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput"></a>

```python
source_port_start_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `destination_address_end`<sup>Required</sup> <a name="destination_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd"></a>

```python
destination_address_end: str
```

- *Type:* str

---

##### `destination_address_start`<sup>Required</sup> <a name="destination_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart"></a>

```python
destination_address_start: str
```

- *Type:* str

---

##### `destination_port_end`<sup>Required</sup> <a name="destination_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd"></a>

```python
destination_port_end: str
```

- *Type:* str

---

##### `destination_port_start`<sup>Required</sup> <a name="destination_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart"></a>

```python
destination_port_start: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_address_end`<sup>Required</sup> <a name="source_address_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd"></a>

```python
source_address_end: str
```

- *Type:* str

---

##### `source_address_start`<sup>Required</sup> <a name="source_address_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart"></a>

```python
source_address_start: str
```

- *Type:* str

---

##### `source_port_end`<sup>Required</sup> <a name="source_port_end" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd"></a>

```python
source_port_end: str
```

- *Type:* str

---

##### `source_port_start`<sup>Required</sup> <a name="source_port_start" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart"></a>

```python
source_port_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FirewallRulesFirewallRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>, cdktf.IResolvable]

---



